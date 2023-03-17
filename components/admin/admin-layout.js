import ColumnsLayout from "../columns-layout";
import FirstColumn from "../first-column";
import MainColumn from "../main-column";
import LastColumn from "../last-column";

export default function AdminLayout({ children }) {
  return (
    <ColumnsLayout>
      <FirstColumn />
      <MainColumn>
        <div>
          {children}
        </div>
      </MainColumn>
      <LastColumn />
    </ColumnsLayout>
  );
}