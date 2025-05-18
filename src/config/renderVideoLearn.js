export function renderVideoLearn([urlVidel]) {
  <div className="flex justify-center mt-6">
    <div className="w-1/2 h-[350px] relative text-center">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl blur-sm opacity-60"></div>

      <div className="relative z-10 rounded-xl overflow-hidden shadow-lg ring-1 ring-blue-200">
        <iframe
          className="w-full h-[350px]"
          src="${urlVidel}"
          title="Hangul Video Learn"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  </div>;
}
