
export const formatNumber = number =>{
    return (number >= 1e9)? `${(number / 1e9).toFixed(1)}B` :
                (number >= 1e6)? `${(number / 1e6).toFixed(1)}M` :
                    (number >= 1e3)? `${(number / 1e3).toFixed(1)}K` : number
}