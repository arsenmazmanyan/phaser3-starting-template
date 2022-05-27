const texturePacker = require("free-tex-packer-core");
const fs = require("fs").promises;
const { join } = require("path");
const { exec } = require("child_process");

const srcPath = join(__dirname, "../src");
const assetsPath = join(srcPath, "assets");
const dir = ["sd", "md", "hd"];

const paths = {
    imgs: {
        path: join(assetsPath, "img"),
        name: "img",
    },
    audio: {
        path: join(assetsPath, "audio"),
        name: "audio",
    },
    spines: {
        path: join(assetsPath, "spines"),
        name: "spines",
    },
    uncompressed: {
        path: join(assetsPath, "uncompressed"),
        name: "uncompressed",
    },
    spriteSheets: {
        path: join(assetsPath, "spriteSheets"),
        name: "spriteSheets",
    },
};

let options = {
    textureName: "",
    width: 2048,
    height: 2048,
    quality: 80,
    scale: 1,
    fixedSize: false,
    powerOfTwo: false,
    padding: 2,
    extrude: 1,
    allowRotation: false,
    detectIdentical: true,
    allowTrim: true,
    trimMode: "trim",
    alphaThreshold: 1,
    removeFileExtension: false,
    prependFolderName: true,
    textureFormat: "png",
    base64Export: false,
    tinify: false,
    packer: "MaxRectsPacker",
    packerMethod: "Smart",
    exporter: "Phaser3",
    filter: "none",
};

function getFileNameFromPath(path) {
    return path.slice(path.lastIndexOf("/") + 1, path.lastIndexOf("."));
}

function getFileExtensionFromPath(path) {
    return path.slice(path.lastIndexOf(".") + 1, path.length);
}

function findFileWithExtension(array, extension) {
    for (const el of array) {
        if (getFileExtensionFromPath(el) === extension) return el;
    }
    return null;
}

async function generateSpriteSheet(data, name) {
    const assets = await Promise.all(
        data.map(async (key) => {
            const contents = await fs.readFile(join(paths.imgs.path, name, key));
            return { path: key, contents };
        }),
    );
    options.textureName = name;
    for (let i = 1; i <= 3; i++) {
        options.scale = i;
        texturePacker(assets, options, async (files, error) => {
            if (error) throw error;
            for (let item of files) {
                const itemPath = join(assetsPath, `spriteSheets/${dir[i - 1]}/${item.name}`);
                await fs.appendFile(itemPath, item.buffer);
            }
        });
    }
}

async function getFolderContent(folderPath, shorterPath = true, shortenFromFolder = "src") {
    let result = [];
    const getFilesRecursively = async (path) => {
        const files = await fs.readdir(path);
        for (const f of files) {
            let newPath = join(path, f);
            const stat = await fs.stat(newPath);
            if (stat.isDirectory()) {
                await getFilesRecursively(newPath);
            } else {
                if (shorterPath) {
                    const dir = newPath.split("/");
                    const fileDir = dir.slice(dir.indexOf(shortenFromFolder) + 1, dir.length);
                    newPath = fileDir.join("/");
                }
                result.push(newPath);
            }
        }
    };
    await getFilesRecursively(folderPath);
    return result;
}

async function emptySpriteSheetFolder() {
    const { name, path } = paths.spriteSheets;
    let files = await getFolderContent(path, true, name);
    if (files.length !== 0) {
        for (const f of files) {
            await fs.unlink(join(path, f));
        }
    }
}

async function generateAtlases() {
    const { path } = paths.imgs;
    const spriteSheetNames = await fs.readdir(path, "utf8");
    for (let s of spriteSheetNames) {
        const arr = await getFolderContent(join(path, s), true, s);
        await generateSpriteSheet(arr, s);
    }
    const data = `export const spriteSheets: string[] = ${JSON.stringify(spriteSheetNames)}`;
    const file = join(assetsPath, "assetsNames/spriteSheets.ts");
    await fs.writeFile(file, data);
    await runPrettierOn(file);
}

async function generateUncompressedSprites() {
    const { path } = paths.uncompressed;
    const arr = await getFolderContent(path, true);
    const objArr = arr.map((el) => {
        const name = getFileNameFromPath(el);
        return { name, path: el };
    });
    const file = join(assetsPath, "assetsNames/assets.ts");
    const data = `export const assets: AssetNameAndPath[] = ${JSON.stringify(objArr)}`;
    await fs.writeFile(file, data);
    await runPrettierOn(file);
}

async function generateAudioAssets() {
    const { path } = paths.audio;
    const arr = await getFolderContent(path, true);
    const objArr = arr.map((el) => {
        const name = getFileNameFromPath(el);
        return { name, path: el };
    });
    const file = join(assetsPath, "assetsNames/audio.ts");
    const data = `export const audioAssets: AssetNameAndPath[] = ${JSON.stringify(objArr)}`;
    await fs.writeFile(file, data);
    await runPrettierOn(file);
}

async function generateSpines() {
    const { path } = paths.spines;
    const spines = await fs.readdir(path, "utf8");
    const spineFiles = await Promise.all(
        spines.map(async (s) => {
            const files = await getFolderContent(join(path, s));
            return {
                key: s,
                jsonURL: findFileWithExtension(files, "json"),
                atlasURL: findFileWithExtension(files, "atlas"),
                preMultipliedAlpha: true,
            };
        }),
    );
    const file = join(assetsPath, "assetsNames/spines.ts");
    const data = `export const spines: SpineFiles[] = ${JSON.stringify(spineFiles)}`;
    await fs.writeFile(file, data);
    await runPrettierOn(file);
}

async function runPrettierOn(file) {
    await exec(`prettier --write ${file}`);
}

async function start() {
    console.log("removing current sprite sheets");
    await emptySpriteSheetFolder();
    console.log("generating atlases");
    await generateAtlases();
    console.log("generating uncompressed sprites");
    await generateUncompressedSprites();
    console.log("generating audio assets");
    await generateAudioAssets();
    console.log("generating spines");
    await generateSpines();
    console.log("asset generation complete");
}

start();
