export function safeCall(it: any, action: (it) => any): any {
    if (it) return action(it);
}

export function safeCallOrNull(it: any, action: (it) => any, actionElse: () => void ): any {
    if (it) return action(it);
    else return  actionElse();
}