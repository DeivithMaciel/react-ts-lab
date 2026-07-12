import { describe, expect, test } from "vitest"
import { formatador } from "./formatCurrency"

describe("formatCurrency", () => {
  test("deve formatar corretamente um valor em reais", () => {
    expect(
    formatador.format(10.0).replace(/\u00A0/g, " ")
).toBe("R$ 10,00")
  })

  test("deve formatar números decimais", () => {
    expect(
    formatador.format(19.9).replace(/\u00A0/g, " ")
).toBe("R$ 19,90")
  })

  test("deve formatar zero", () => {
    expect(
    formatador.format(0.0).replace(/\u00A0/g, " ")
).toBe("R$ 0,00")
  })
})