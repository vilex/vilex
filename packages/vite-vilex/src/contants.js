function addPrefix(val) {
    return `__vilex__${val}`
}
module.exports = {
    END_OF_IMPORT_IDENTIFICATION: addPrefix(`END_OF_IMPORT_IDENTIFICATION`),
    END_OF_FILE_IDENTIFICATION: addPrefix(`END_OF_FILE_IDENTIFICATION`),
    VAR_PREFIX: '_vilex_hmr_'
}