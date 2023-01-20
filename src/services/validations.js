// TODO: Add here the function to validate
module.exports = function (gamerTag) {
    const reg = new RegExp("^[A-Z0-1$#'%*]{8}");

    return reg.test(gamerTag);
};

const isEmpty = (label) => !label || label.length === 0;

exports.isEmpty = isEmpty;
