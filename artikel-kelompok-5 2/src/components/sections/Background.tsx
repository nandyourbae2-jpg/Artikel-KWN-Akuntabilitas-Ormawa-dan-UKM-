import { content } from '../../data';

export function Background() {
  const { latar_belakang } = content;

  return (
    <section
      id="latar-belakang"
      className="section-pad bg-[#F3F3F3] text-[#121212]"
    >
      <div className="site-container">
        {/* Split layout with sticky heading */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <h2 className="display-h2 text-[#121212]">Latar belakang</h2>
              <p className="mt-4 text-sm font-medium text-[#58595B]">
                SDGs Tujuan 16 · Nilai Pancasila
              </p>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="prose-col space-y-6 text-base leading-[1.7] text-[#121212] sm:text-lg">
              {latar_belakang.paragraf.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Two large dark panels for SDG 16.5 and 16.6 */}
            <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {latar_belakang.sdg_targets.map((target) => (
                <div
                  key={target.kode}
                  className="flex flex-col justify-between rounded-[24px] bg-[#121212] p-8 text-white sm:p-10"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="display-number-sm text-white">
                      {target.kode}
                    </span>
                    <span className="text-xs font-medium text-white/64">
                      Target SDG
                    </span>
                  </div>
                  <p className="mt-8 text-base leading-relaxed text-white/85 sm:text-lg">
                    {target.isi}
                  </p>
                </div>
              ))}
            </div>

            {/* Vertical numbered list for 3 research goals (not 3 cards) */}
            <div className="mt-16">
              <p className="prose-col text-base font-medium text-[#58595B] sm:text-lg">
                {latar_belakang.pengantar_tujuan}
              </p>
              <ol className="mt-6 border-t border-[rgba(18,18,18,0.14)]">
                {latar_belakang.tujuan.map((item, idx) => (
                  <li
                    key={idx}
                    className="grid grid-cols-12 gap-4 border-b border-[rgba(18,18,18,0.14)] py-7 sm:py-8"
                  >
                    <span className="col-span-2 text-3xl font-extrabold tracking-tight text-[#121212] tabular-nums sm:text-4xl">
                      {idx + 1}
                    </span>
                    <p className="col-span-10 text-base leading-[1.7] text-[#121212] sm:text-lg">
                      {item}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
