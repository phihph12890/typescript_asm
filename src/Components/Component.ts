import {IComponent} from "./IComponent.js"

export abstract class Component implements IComponent {
    public async render() {
        //Hiển thị giao diện
        document.querySelector("#root")!.innerHTML = await this.template(); // thêm dấu !  sau querySelector => thông báo chắc chắn có phần tử
        //Xử lý
        await this.afterRender();
    }
    public abstract afterRender(): void;
    public abstract template(): any;
}
