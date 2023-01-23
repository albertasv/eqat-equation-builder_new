
export const EDITOR_Q_PROPERTY = "q-property";
export const EDITOR_Q_EXTRA_INFO = "q-extra-info";
export const EDITOR_Q_LINKS = "q-links";
export const EDITOR_Q_VARIABLE_LIST = "q-variable-list";
export const EDITOR_Q_VARIABLE = "q-variable";
export const EDITOR_Q_XML = "q-xml";
export const EDITOR_Q_PREVIEW_E4 = "q-preview-e4";
export const EDITOR_Q_PREVIEW_WAS = "q-preview-was";
export const EDITOR_Q_BODY = "q-body";
export const EDITOR_Q_NAVIGATION = "q-navigation";
export const EDITOR_Q_LOCAL_CHANGE_HISTORY = "q-local-changes-history";
export const EDITOR_Q_ACTION_TOOLBAR = "q-action-toolbar";
export const EDITOR_Q_HELP = "q-help";
export const EDITOR_Q_CHEM_FORMULA = "q-chem-formula";
export const EDITOR_Q_MULTIPLE_CHOICE = "q-multiple-choice";
export const EDITOR_Q_MATH_FORMULA = "q-math-formula";
export const EDITOR_Q_LEARNOSITY = "q-learnosity";
export const EDITOR_Q_LEARNOSITY_TYPE_WRAPPER = "q-learnosity-type-wrapper";

export const EDITLINE_PROPERTIES = "edit-line-properties";
export const EDITLINE_EXTRA_INFO = "edit-line-extra-info";
export const EDITLINE_LINKS = "edit-line-links";
export const EDITLINE_BODY = "edit-line-body";
export const EDITLINE_VARIABLES = "edit-line-variables";
export const EDITLINE_XML = "edit-line-xml";
export const EDITLINE_E4 = "edit-line-e4";
export const EDITLINE_WAS = "edit-line-was";

export function checkIfEditorIsAvailableForEditline(editorId, activeEditLine) {
    if (editorId === null) return true;

    const state = {
        [EDITOR_Q_ACTION_TOOLBAR]: [EDITLINE_BODY],
    };
    
    if (state[editorId]) {
        return state[editorId].indexOf(activeEditLine) > -1;
    }

    return true;
}
