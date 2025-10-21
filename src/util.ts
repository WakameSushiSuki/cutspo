export namespace Util {
    export function typeName(obj: any) {
        return obj?.constructor?.name ??
            (obj === null ? 'null'
                          : 'undefined');
    }
}

export default Util;