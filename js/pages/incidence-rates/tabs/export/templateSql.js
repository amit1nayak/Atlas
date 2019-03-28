define([
	'text!./templateSql.html',
	'components/Component',
	'utils/AutoBind',
	'utils/CommonUtils',
], function (
	view,
	Component,
	AutoBind,
	commonUtils,
) {
	class IRexporttemplateSqlTab extends AutoBind(Component) {
		constructor(params) {
      super(params);
      this.parent = params.parent;
    }
	}

	return commonUtils.build('ir-export-templateSql', IRexporttemplateSqlTab, view);
});