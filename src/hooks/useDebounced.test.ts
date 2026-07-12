import { renderHook, act } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";

import { useDebounced } from "./useDebouced";

describe('useDebounced', () => {
    test('Deve retorna valor inicial', () => {
        const {result}  = renderHook(() => 
        useDebounced('Notebook', 300))
        expect(result.current).toBe('Notebook')
    })
    test('Deve atualizat o valor após o delay', () => {
        vi.useFakeTimers()
        const {result, rerender} = renderHook(
            ({value}) => useDebounced(value, 300),
            {
                initialProps: {
                    value: 'Mouse'
                }
            }
        ) 
        rerender({
            value: 'Mouse Gamer'
        })
        expect(result.current).toBe('Mouse')
        act(() => {
            vi.advanceTimersByTime(300)
        })
        expect(result.current).toBe('Mouse Gamer')
        vi.useFakeTimers()
    })
})