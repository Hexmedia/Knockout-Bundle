ko.symfony = {
};

ko.bindingHandlers.route = {
	init: function() {
		return {"controlsDescendantBindings": true};
	},
	update: function(element, valueAccessor, allBindingsAccessor, vm, bindingContext) {
		var viewModel = valueAccessor(), allBindings = allBindingsAccessor(), name, params, absolute;

		name = viewModel.name || null;
		params = viewModel.params || {};
		absolute = viewModel.absolute || false;

		if (name === null) {
			throw "Name is required";
		}

		element.href = Routing.generate(name, params, absolute);
	}
};
