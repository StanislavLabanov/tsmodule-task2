interface totalPriceProps {
   price: number
   discount: number
   isInstallment: boolean
   months: number
}

const totalPrice = <T extends totalPriceProps>({ price, discount, isInstallment, months }: T): number => {
   if (isInstallment) {
      return Math.ceil((price * +(1 - (discount / 100)).toFixed(2)) / months)
   } else return price * +(1 - (discount / 100)).toFixed(2)
}

const price = totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 })

console.log(price)