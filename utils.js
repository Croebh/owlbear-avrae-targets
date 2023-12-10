export function getExtensionId(module) {
    return `com.avrae-targetting/${module}`
}

/* 
 * @param {Image} item - The item to get the name of
 */
export function nameDisplay(item, sceneMetadata) {
    let name = item.text.plainText.replace(/(\r\n|\n|\r)/gm, "");
    if (!name && item.text.richText) {
        name = item.text.richText[0].children[0].text.replace(/(\r\n|\n|\r)/gm, "");
    }

    name = name.replace(/\s+(\d+)$/g, "$1");
    
    if (name) {
        return `-t "${name}"`
    }
    
}
