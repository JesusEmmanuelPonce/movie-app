import { bindActionCreators } from "redux";

const bindAll = actions => dispatch => {
    const uncapitalize = str => str.charAt(0).toLowerCase() + str.slice(1);

    return Object.keys(actions).reduce((acc, actionName) => ({
        ...acc,
        [uncapitalize(actionName)] : bindActionCreators(actions[actionName], dispatch),
    }), {});
}

export default bindAll;