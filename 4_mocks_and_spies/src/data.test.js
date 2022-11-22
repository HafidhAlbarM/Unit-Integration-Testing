import { describe, expect, it, vi } from "vitest";
import { generateReportData } from "./data";

describe("generateReportData()", () => {
  it("should execute logFn if provided", () => {
    // Spies digunakan utk mengetes fungsi yg yg ada di dalam parameter, fungsi ini kita sendiri yg buat kodenya
    const logger = vi.fn(); //atau bisa gini vi.fn(() => {console.log('bebas')});

    //untuk merubah isi fungsi vi.fn() satu kali saja, kemudia bisa dipakai untuk case lain yg berbeda
    logger.mockImplementationOnce(() => {});

    generateReportData(logger);

    expect(logger).toBeCalled();
  });
});
