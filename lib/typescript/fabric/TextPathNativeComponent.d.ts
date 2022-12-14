import type { ColorValue } from 'react-native';
import type { Float, Int32, WithDefault } from 'react-native/Libraries/Types/CodegenTypes';
import type { ViewProps } from './utils';
interface SvgNodeCommonProps {
    name?: string;
    opacity?: WithDefault<Float, 1.0>;
    matrix?: ReadonlyArray<Float>;
    mask?: string;
    markerStart?: string;
    markerMid?: string;
    markerEnd?: string;
    clipPath?: string;
    clipRule?: WithDefault<Int32, 0>;
    responsible?: boolean;
    display?: string;
    pointerEvents?: string;
}
declare type ColorStruct = Readonly<{
    type?: WithDefault<Int32, -1>;
    payload?: ColorValue;
    brushRef?: string;
}>;
interface SvgRenderableCommonProps {
    fill?: ColorStruct;
    fillOpacity?: WithDefault<Float, 1.0>;
    fillRule?: WithDefault<Int32, 1>;
    stroke?: ColorStruct;
    strokeOpacity?: WithDefault<Float, 1.0>;
    strokeWidth?: WithDefault<string, '1'>;
    strokeLinecap?: WithDefault<Int32, 0>;
    strokeLinejoin?: WithDefault<Int32, 0>;
    strokeDasharray?: ReadonlyArray<string>;
    strokeDashoffset?: Float;
    strokeMiterlimit?: Float;
    vectorEffect?: WithDefault<Int32, 0>;
    propList?: ReadonlyArray<string>;
}
declare type FontObject = Readonly<{
    fontStyle?: string;
    fontVariant?: string;
    fontWeight?: string;
    fontStretch?: string;
    fontSize?: string;
    fontFamily?: string;
    textAnchor?: string;
    textDecoration?: string;
    letterSpacing?: string;
    wordSpacing?: string;
    kerning?: string;
    fontFeatureSettings?: string;
    fontVariantLigatures?: string;
    fontVariationSettings?: string;
}>;
interface SvgGroupCommonProps {
    fontSize?: string;
    fontWeight?: string;
    font?: FontObject;
}
interface SvgTextCommonProps {
    dx?: ReadonlyArray<string>;
    dy?: ReadonlyArray<string>;
    x?: ReadonlyArray<string>;
    y?: ReadonlyArray<string>;
    rotate?: ReadonlyArray<string>;
    inlineSize?: string;
    textLength?: string;
    baselineShift?: string;
    lengthAdjust?: string;
    alignmentBaseline?: string;
    verticalAlign?: string;
}
interface NativeProps extends ViewProps, SvgNodeCommonProps, SvgRenderableCommonProps, SvgGroupCommonProps, SvgTextCommonProps {
    href?: string;
    side?: string;
    method?: string;
    midLine?: string;
    spacing?: string;
    startOffset?: string;
}
declare const _default: import("react-native/Libraries/Utilities/codegenNativeComponent").NativeComponentType<NativeProps>;
export default _default;
