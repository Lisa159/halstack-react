# DXC Select Component

## Props

<table>
    <tr style="background-color: grey">
        <td>Name</td>
        <td>Default</td>
        <td>Description</td>
    </tr>
    <tr>
        <td>options: object[]</td>
        <td><code>[]</code></td>
        <td>An array of objects representing the selectable options. Each object has the following properties:
        <ul>
            <li><b>value</b>: Option inner value</li>
            <li><b>label</b>: Option display value</li>
            <li><b>iconSrc</b>: URL of the icon that will be placed next to the option label</li>
        </ul>
        </td>
    </tr>
    <tr>
        <td>iconPosition: 'before' | 'after'</td>
        <td><code>'before'</code></td>
        <td>In case options include an icon, whether the icon should appear after or before the label.</td>
    </tr>
    <tr>
        <td>value: string | string[]</td>
        <td><code>[]</code></td>
        <td>The key of the selected value/values. If the select component doesn't allow multiple selection, value must be a string. If the select component allows multiple selection, value must be an array of strings</td>
    </tr>
    <tr>
        <td>multiple: boolean</td>
        <td><code>false</code></td>
        <td>If true, the select component will support multiple selection. In that case, value must be an array of strings with the keys of the selected values, otherwise value must be a string.</td>
    </tr>
    <tr>
        <td>label: string</td>
        <td></td>
        <td>Text to be placed next to the select.</td>
    </tr>
    <tr>
        <td>theme: 'light' | 'dark'</td>
        <td><code>'light'</code></td>
        <td>Uses one of the available component themes.</td>
    </tr>
    <tr>
        <td>name: string</td>
        <td></td>
        <td>Name attribute of the input element.</td>
    </tr>
    <tr>
        <td>disabled: boolean</td>
        <td><code>false</code></td>
        <td>If true, the component will be disabled.</td>
    </tr>
    <tr>
        <td>required: boolean</td>
        <td><code>false</code></td>
        <td>If true, a red asterisk will appear before the label to indicate to the user that the field is required.</td>
    </tr>
    <tr>
        <td>disableRipple: boolean</td>
        <td><code>false</code></td>
        <td>If true, the ripple effect will be disabled.</td>
    </tr>
    <tr>
        <td>onChange: function</td>
        <td></td>
        <td>This function will be called every time the selection changes. The string with the key of the selected value will be passed as a parameter to this function. If multiple selection is allowed, an array of keys will be passed</td>
    </tr>
</table>
