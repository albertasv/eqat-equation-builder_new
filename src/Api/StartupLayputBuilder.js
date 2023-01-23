import { BuildPanelsStartupState } from "../Configuration/Panels";
import { BuildEditLineStartupState } from "../Configuration/EditLine";

export default function StartupLayputBuilder(dataObject) {
    return new Promise((res, rej) => {
        const qType = dataObject.fields.type;

        const panels = BuildPanelsStartupState(qType);
        const editLine = BuildEditLineStartupState(qType);

        res({
            panels,
            editLine
        });
    })
}
