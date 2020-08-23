export function handleScrollUtil(direction) {
    const { history, match, itemDB: { info } } = this.props;
    const { assetID } = this.state;
    let index = info.findIndex(item => item.name.toLowerCase() === assetID);
    switch (direction) {
        case 'forward':
            if (index < info.length - 1) {
                const itemID = info[(index + 1)].name.toLowerCase();
                return history.push(`${match.url}/${itemID}`)
            } else {
                index = 0
                const itemID = info[index].name.toLowerCase();
                return history.push(`${match.url}/${itemID}`)
            }
        case 'backward':
            if (index > 0) {
                const itemID = info[(index - 1)].name.toLowerCase();
                return history.push(`${match.url}/${itemID}`)
            } else {
                index = info.length - 1;
                const itemID = info[index].name.toLowerCase();
                return history.push(`${match.url}/${itemID}`)
            }
        default:
            return null;
    }
}