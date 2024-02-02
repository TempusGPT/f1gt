import { Accessor, For, JSX, Setter } from "solid-js";

type Props = {
    label: string;
    options: Option[];
    value: Accessor<Option>;
    setValue: Setter<Option>;
};

export type Option = { name: string; value: number };

export default ({ label, options, value, setValue }: Props) => {
    const handleChange: JSX.EventHandler<HTMLSelectElement, Event> = (e) => {
        const index = e.currentTarget.selectedIndex;
        if (0 <= index && index < options.length) {
            setValue(options[index]);
        }
    };

    return (
        <label>
            {label}
            <select value={value().value} onChange={handleChange}>
                <For each={options}>{(t) => <option value={t.value}>{t.name}</option>}</For>
            </select>
        </label>
    );
};
