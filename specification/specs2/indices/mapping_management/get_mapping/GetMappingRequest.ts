@rest_spec_name("indices.get_mapping")
class GetMappingRequest extends RequestBase {
	@request_parameter()
	ignore_unavailable: boolean;
	@request_parameter()
	allow_no_indices: boolean;
	@request_parameter()
	expand_wildcards: ExpandWildcards;
	@request_parameter()
	local: boolean;
}
