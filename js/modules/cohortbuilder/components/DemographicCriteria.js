define(['knockout', '../options', '../InputTypes/Range', 'text!./DemographicCriteriaTemplate.html', './ConceptSetSelector'
], function (ko, options, Range, template) {

	function DemographicCriteriaViewModel(params) {

		var self = this;
		self.Criteria = params.criteria;
		self.options = options;

		var addActions = [
			{
				text: "Add Gender Criteria",
				selected: false,
				description: "Filter events based on Gender.",
				action: function() {
					if (self.Criteria.Gender() == null)
						self.Criteria.Gender(ko.observableArray());				
				}
			},
			{
				text: "Add Race Criteria",
				selected: false,
				description: "Filter events based on Gender.",
				action: function() {
					if (self.Criteria.Race() == null)
						self.Criteria.Race(ko.observableArray());				
				}
			},
			{
				text: "Add Ethnicity Criteria",
				selected: false,
				description: "Filter events based on Ethnicity.",
				action: function() {
					if (self.Criteria.Ethnicity() == null)
						self.Criteria.Ethnicity(ko.observableArray());				
				}
			},
			{
				text: "Add Event Start Date Criteria",
				selected: false,
				description: "Filter Events by Start Date.",
				action: function() {
					if (self.Criteria.OccurrenceStartDate() == null)
						self.Criteria.OccurrenceStartDate(new Range({Op: "lt"}));				
				}
			},
			{
				text: "Add Event End Date Criteria",
				selected: false,
				description: "Filter Events by End Date",
				action: function() {
					if (self.Criteria.OccurrenceEndDate() == null)
						self.Criteria.OccurrenceEndDate(new Range({Op: "lt"}));				
				}
			}
		];

		self.addCriterionSettings = {
			selectText: "Add criteria attribute…",
			height:250,
			actionOptions: addActions,
			onAction: function (data) {
				data.selectedData.action();
			}
		};

		self.removeCriterion = function (propertyName) {
			self.Criteria[propertyName](null);
		}
		
	}

	// return compoonent definition
	return {
		viewModel: DemographicCriteriaViewModel,
		template: template
	};
});