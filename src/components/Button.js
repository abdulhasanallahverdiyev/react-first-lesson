import className from "classnames"

function Button({children,  variant = 'default' }) {
    console.log(children);
    return (
        <button className={className({ "p-4 h-10 flex items-center rounded m-2": true, "bg-gray-100": variant === 'default ', "bg-green-100": variant === 'success', })}>{children} {variant}</button>
    )
}

export default Button