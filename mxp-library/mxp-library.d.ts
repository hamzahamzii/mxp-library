import { DefineComponent, Plugin } from 'vue';


declare const MxpLibrary: Exclude<Plugin['install'], undefined>;
export default MxpLibrary;

export const MxpLibrarySample: DefineComponent<{}, {}, any>;
