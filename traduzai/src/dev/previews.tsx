import {ComponentPreview, Previews} from "@react-buddy/ide-toolbox";
import {PaletteTree} from "./palette";
import ParametersPanel from "../components/ParametersPanel";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/ParametersPanel">
                <ParametersPanel/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;