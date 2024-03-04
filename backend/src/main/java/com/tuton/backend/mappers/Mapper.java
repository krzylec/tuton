package com.tuton.backend.mappers;

import java.util.List;

public interface Mapper<T, E> {
    public T toEntity(E dto);

    public E toDto(T entity);

    public List<T> toEntity(List<E> dtos);

    public List<E> toDto(List<T> entitys);
}
