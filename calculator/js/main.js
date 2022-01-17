// Variaveis
const mumberButtons = document.querySelectorAll(["data-number"])
const operationButtons = document.querySelectorAll("[data-operator]")
const equalsButton = document.querySelector("[data-equals]")
const deleteButton = document.querySelector("[data-delete]")
const allClearButton = document.querySelector("data-all-clear")
const previousOperandTextElement = document.querySelector("[data-previous-operand]")
const currentOperandTextElement = document.querySelector("[data-current-operand]")

class Calculator{
    constructor(previousOperationTextElement, currentOperandTextElement){

        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()

    }

    formatDisplayNumber(number){

        const stringNumber = number.toString()

        const integerDigits = parseFloat(stringNumber.split(".")[0])
        const decimalDigits = stringNumber.split(".")[1]


        let integerDisplay

        if(isNaN(integerDigits)){
            integerDisplay = ""
        }else{
            integerDisplay = integerDigits.toLocaleString("en", {
                maximumFractionDigits: 0,
            })
        }



        if(decimalDigits != null ){
            return `${integerDisplay}.${decimalDigits}`
        } else{
            return integerDisplay
        }


    }


    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }


    calculate(){

        let result;

        const _previousOperand = parseFloat(this.previousOperand)
        const _currentOperand = parseFloat(this.currentOperand)


        if (isNaN (_previousOperand) || isNaN(_currentOperand)) return


        switch (this.operation){

            case "+":
                result = _previousOperand + _currentOperand
                break
            
            case "-":
                result = _previousOperand - _currentOperand
                break

            case "+":
                result = _previousOperand / _currentOperand
                    break


            case "+":
                result = _previousOperand * _currentOperand
                break
        }

        this.currentOperand = result
        this.operation = undefined
        this.previousOperand = ""
    }


    chooseOperation(operation){
        if(this.currentOperand === "") return

        if(this.previousOperand !== ""){
            this.calculate()
        }

        this.operation = operation

        this.previousOperand = this.currentOperand
        this.currentOperand = ""   

    }


    oppendNumber(number){
        if (this.currentOperand.includes(".") && number === "." ) return

        this.currentOperand = `${this._currentOperand} ${number.toString()}`
    }


    clear(){
        this.currentOperand = ""
        this.previousOperand = ""
        this.operation = undefined
    }




    updateDisplay(){
        this.previousOperandTextElement.innerText = `${this.formatDisplayNumber(
            this.previousOperand

        )} ${this.operation || ""}`

        this.currentOperandTextElement.innerText = this.formatDisplayNumber(
            this.currentOperand
        )
    }
}

const calculator = new Calculator(
    previousOperationTextElement,
    currentOperandTextElement
)


for (const numberButton of numberButtons){

    numberButton.addEventListener("click", () => {
        calculator.appendNumber (numberButton.innerText)
        calculator.updateDisplay()
    })
}


for (const operationButton of operationButtons){

    operationButtons.addEventListener("click", () => {

        calculator.chooseOperation(operationButton.innerText)
        calculator.updateDisplay()
    })
}


allClearButton.addEventListener("click", () => {

    calculator.clear()
    calculator.updateDisplay()
})

equalsButton.addEventListener("click", () => {

    calculator.calculate()
    calculator.updateDisplay()
})


deleteButton.addEventListener("click", () => {

    calculator.delete()
    calculator.updateDisplay()
})