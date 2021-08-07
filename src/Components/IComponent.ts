export interface IComponent {
    render: () => void;
    template: () => string;
    afterRender: () => void;
}
