import { User } from 'lucide-react';
import DetailSection from './DetailSection';
import DetailRow from './DetailRow';


const RightPanelContent = () => {
  return (
    <div className="flex-1 overflow-y-auto p-4 bg-white">
      <div className="p-4">
        <div className="flex items-start gap-3 mb-3">
          <div className="flex-1">
            <h3 className="text-sm font-medium text-gray-900 mb-1">
              Hydrocarbon Well American Petroleum Institute Unique Well Identifier
            </h3>
            <p className="text-xs text-gray-500">Standardized Name</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-900 font-medium">well_api_unique_well_id</p>
            <p className="text-xs text-gray-500">Machine Name</p>
          </div>
        </div>
      </div>

      <DetailSection title="Domain Value Type">
        <DetailRow number="01" label="Data Type" value="Number Special String" />
        <DetailRow number="02" label="Statistical Variable Type" value="Categorical" />
        <DetailRow number="03" label="Is An Array" value="FALSE" />
      </DetailSection>

      <DetailSection title="Domain Object Identity">
        <DetailRow number="01" label="Object Identifier Type" value="Object Real ID" />
        <DetailRow number="02" label="Reference Identifier Type" value="Not A Reference Identifier" />
        <DetailRow number="03" label="Reference Thing RefURID" value="Not Applicable" valueColor="text-gray-400" />
        <DetailRow number="04" label="Uniqueness Constraint Type" value="Unique" />
        <DetailRow number="05" label="Is Object Hash Compute Constituent" value="True" />
      </DetailSection>

      <div className="overflow-hidden">
        <div className="px-4 py-3">
          <h3 className="text-sm font-semibold text-gray-900">Data Privacy Protection</h3>
        </div>
        <div className="p-4 space-y-3">
          <DetailRow number="01" label="Sensitive Information Type" value="Not A Sensitive Information" />
          <DetailRow number="02" label="Security & Privacy Classification" value="Public" />
          <DetailRow number="03" label="Applicable Data Privacy Regulation" value="Not Applicable" valueColor="text-gray-400" />
        </div>
      </div>
    </div>
  );
};
export default RightPanelContent;