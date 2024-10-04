import { createApp } from "vue";

import { default as TsxDefault } from "./Comp";
import { default as Default, Named, NamedSpec } from "./Comps";
import OtherExt from "./OtherExt.tesx";
// eslint-disable-next-line
import JsxWithQuery from "./Query.jsx?query=true";
import JsxScript from "./Script.vue";
import JsxSetupSyntax from "./setup-syntax-jsx.vue";
import JsxSrcImport from "./SrcImport.vue";
import TsImport from "./TsImport.vue";

function App() {
	return (
		<>
			<Named />
			<NamedSpec />
			<Default />
			<TsxDefault />
			<OtherExt />
			<JsxScript />
			<JsxSrcImport />
			<JsxSetupSyntax />
			<JsxWithQuery />
			<TsImport />
		</>
	);
}

createApp(App).mount("#app");
