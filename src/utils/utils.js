export function passwordMatch(password, confirmPassword) {
    if (confirmPassword.length > 0) {
        if (password === confirmPassword) {
            this.setState({ passwordMatch: true, matchMessage: '', border: 'border-green' })
        } else {
            this.setState({ passwordMatch: false, matchMessage: 'Passwords do not match', border: 'border-red' })
        }
    } else if (confirmPassword.length === 0) {
        this.setState({ passwordMatch: true, matchMessage: '', border: '' })
    }
}