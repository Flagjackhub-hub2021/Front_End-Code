import "alpinejs"

//Form Validation
window.checkForm = () => {
    return {
        email: '',
        error: false,
        checkIfEmail() {
            const rex = /\S+@\S+\.\S+/
            return rex.test(String(this.email).toLowerCase())
        },
        validateData() {
            if (this.email == '') {
                this.error = true
            } else if (this.checkIfEmail() != true) {
                this.error = true
            } else {
                this.error = false
            }
        },
        change() {
            this.error = false
        }
    }
}