import imgSrc from "./1.png"

var app = {
    data(){
      return{
        imgSrc:imgSrc
      }
    },
    template:`<div>入口组件1
                  <img :src="imgSrc" alt="图片">
              </div>`
};

export var num1 = 6;

var num2 = 12;
export {num2}

export function add(x,y) {
    return console.log(x+y);
}

export default app;
