import { For, JSX } from "solid-js";

export type DropdownValue = string | number | string[] | undefined;
export type DropdownOption<T extends DropdownValue> = { name: string; value: T };

export type DropdownProps<T extends DropdownValue> = {
    label: string;
    options: DropdownOption<T>[];
    value?: T;
    onChange?: (value: T) => void;
};

export const Dropdown = <T extends DropdownValue>(props: DropdownProps<T>) => {
    const handleChange: JSX.EventHandler<HTMLSelectElement, Event> = (e) => {
        const index = e.currentTarget.selectedIndex;
        if (0 <= index && index < props.options.length) {
            props.onChange?.(props.options[index].value);
        }
    };

    return (
        <label>
            <div>{props.label}</div>
            <select value={props.value ?? props.options[0].value} onChange={handleChange}>
                <For each={props.options}>
                    {(option) => <option value={option.value}>{option.name}</option>}
                </For>
            </select>
        </label>
    );
};
