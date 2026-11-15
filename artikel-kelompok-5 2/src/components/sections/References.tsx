import { content } from '../../data';
import { CopyButton } from '../ui/CopyButton';

export function References() {
  const { daftar_pustaka } = content;

  return (
    <section id="pustaka" className="section-pad bg-[#F3F3F3] text-[#121212]">
      <div className="site-container">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <h2 className="display-h2 text-[#121212]">Daftar pustaka</h2>
              <p className="mt-4 text-sm font-medium text-[#58595B]">
                11 Rujukan Ilmiah & Regulasi
              </p>
            </div>
          </div>

          <div className="lg:col-span-8">
            <ul className="border-t border-[rgba(18,18,18,0.14)] divide-y divide-[rgba(18,18,18,0.14)]">
              {daftar_pustaka.map((item, idx) => (
                <li
                  key={idx}
                  className="py-6 flex flex-col sm:flex-row sm:items-baseline justify-between gap-4"
                >
                  <p className="text-sm sm:text-base leading-relaxed text-[#58595B] prose-col">
                    {item}
                  </p>
                  <CopyButton text={item} label="Salin" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
