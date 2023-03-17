import AdminLayout from "@/components/admin/admin-layout";
import TextField from "@/components/admin/text-field";
import TextareaField from "@/components/admin/textarea-field";

export default function NewExpert() {
  return (
    <AdminLayout>
      <h1 class="text-3xl mb-10">New Expert</h1>
      <form action="/api/expert/new" method="post">
        <TextField label="Name" name="name" placeholder="e.g. John Doe" />
        <TextField label="Profession" name="profession" placeholder="e.g. Certified Public Accountant" />
        <TextField label="Reputation" name="reputation" placeholder="e.g. 1500" />
        <TextareaField label="Bio" name="bio" placeholder="Bio" />
        <TextField label="Member since" name="joined" placeholder="e.g. 1678855315 (timestamp)" />
        <TextField label="City" name="city" placeholder="e.g. Scranton, PA" />
        <TextareaField label="Services" name="services" placeholder="(comma separated values), e.g. Lease Accounting,Attest Services,Audit & Reviews,SOC Audits " />
        <button type="submit" class="block w-full mb-16 py-2 px-3 bg-gray-300 text-black font-semibold rounded-lg">Submit</button>
      </form>
    </AdminLayout>
  );
}