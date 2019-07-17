function DomElement(selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.createElement = function(){
        let str;
        if(selector[0] == "."){
           str = document.createElement("DIV");
           str.innerHTML = selector.substr(1);
           str.setAttribute("class", selector.substr(1));
           document.body.appendChild(str);
        } else if(selector[0] == "#"){
            str = document.createElement("P");
           str.innerHTML = selector.substr(1);
           document.body.appendChild(str);
        }
        str.style.height = height + "px";
        str.style.width = width + "px";
        str.style.background = bg;
        str.style.fontSize = fontSize + "px";
    };
  }

let obj = new DomElement(".hello", 200, 200, "red", 50);

obj.createElement();
