function ErrorMessage({ message }) {
  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-red-500/10 border 
                    border-red-500/20 rounded-xl">
      <p className="font-mono text-red-400 text-sm text-center">
        ✗ {message}
      </p>
    </div>
  )
}
export default ErrorMessage