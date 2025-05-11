import RegisterForm from "../../islands/RegisterForm.tsx";

export default function Register() {
  return (
    <main>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="w-full max-w-sm p-8 bg-white shadow-md rounded-2xl">
          <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Kallax</h1>
          <RegisterForm />
        </div>
      </div>
    </main>
  );
}
