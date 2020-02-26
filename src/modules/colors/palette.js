
module.exports = {
    colors:{
        general:{
            // black: ''
        },
        mainPalette:{
            main1: '#e1e6f2',
            main2: '#99bbc7',
            main3: '#6f92b2',
            main4: '#437db2',
            main5: '#0d6996',
        }
    },

    getColor(group,color){
        return this.colors[`${group}`][`${color}`]
    },
}
