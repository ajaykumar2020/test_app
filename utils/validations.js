import validator from 'is_js';

const checkEmpty = (val, key) => {
    if(validator.empty(val.trim())){
        return `${key}`;
    }else{
        return '';
    }
}

const checkMinLength = (val, minLength, key) => {
    if(val.trim().length < minLength){
        return `Please Enter Valid ${key}`;
    }else{
        return '';
    }
}

export default function(data){
    const {
        mobile, 
        pin,
    } = data

    if (mobile !== undefined){
        let emptyValidationText = checkEmpty(mobile, 'Please Enter Mobile Number')
        if(emptyValidationText !== ''){
            return emptyValidationText;
        }else{
            let minLengthValidation = checkMinLength(mobile, 10, 'mobile')
            if(minLengthValidation !== ''){
                return minLengthValidation
            }
        }
    }

    if (pin !== undefined){
        let emptyValidationText = checkEmpty(pin, 'Please Enter 4 Digit Pin')
        if(emptyValidationText !== ''){
            return emptyValidationText;
        }else{
            let minLengthValidation = checkMinLength(pin, 4, 'pin')
            if(minLengthValidation !== ''){
                return minLengthValidation
            }
        }
    }

}