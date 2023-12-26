/**
 * @typedef {import("@prismicio/client").Content.MemberlistSlice} MemberlistSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<MemberlistSlice>} MemberlistProps
 * @param {MemberlistProps}
 */

import Memberlist from "@/app/components/Memberlist";

const MemberSlice = ({ slice }) => {
  return (
    <>
      <Memberlist />
    </>
  );
};

export default MemberSlice;
