import img from '../../JumpGame/img/gameBg.png'
export default {
    template: `
       <div>
         <img :src="imgSrc"/>
       </div>
    `,
    data() {
        return {
            imgSrc: img
        }
    },
}