import errors from "@/commons/constants/errors";

export default function getMessageError(error) {
    if (isThereASpecificMessageError(error)) {
        return getSpecificMessageError(error);
    } else {
        return getDefaultMessageError();
    }
}

function isThereASpecificMessageError(error) {
    return getSpecificMessageError(error)
}

function getSpecificMessageError(error) {
    return errors[error.code]
}

function getDefaultMessageError() {
    return errors.default
}
