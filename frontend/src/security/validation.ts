export const isValidStxAddress = (addr: string) => addr.startsWith('ST') || addr.startsWith('SP');
export const isStrongPassword = (pass: string) => pass.length > 8;
