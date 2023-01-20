// TODO: Add here the function to validate
function addGamerTag(gamerTag) {
    const reg = new RegExp("^[[A-Z$#'%*][0-9][$#'%*]]{8}");

    return reg.test(gamerTag);
};

const isEmpty = (label) => !label || label.length === 0;

module.exports = { isEmpty, addGamerTag };
