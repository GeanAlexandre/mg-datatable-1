export class Column {
    prop: string;
    hide?: boolean;

    private _text: string;
    public get text(): string {
        return Boolean(this._text) ? this._text : this.prop;
    }
    public set text(v: string) {
        this._text = v;
    }
}
