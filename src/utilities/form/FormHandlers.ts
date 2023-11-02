const emailPattern: RegExp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

const handleEmpty = (value: string): boolean => {
    return value === "";
};

const handlePattern = (value: string, pattern: RegExp): boolean => {
    return pattern.test(value);
};

export { emailPattern, handleEmpty, handlePattern };
